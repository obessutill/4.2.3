import { Group, Pagination, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { 
    fetchVacancies,
    selectError,
    selectLoading,
    selectPage,
    selectPages,
    selectVacancies,
    setPage,
 } from '../store/vacanciesSlice';
 import { VacancyCard } from "./VacancyCard";
 import { VacancyCardSkeleton } from "./VacancyCardSkeleton";

 export const VacancyList = () => {
    const dispatch = useAppDispatch();

    const items = useAppSelector(selectVacancies);
    const loading = useAppSelector(selectLoading)
    const error = useAppSelector(selectError);
    const page = useAppSelector(selectPage);
    const pages = useAppSelector(selectPages);

    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch, page]);

    const handlePageChange = (nextPage: number) => {
        dispatch(setPage(nextPage));
    }

    return (
        <Stack gap={0} style={{ flex: 1 }}>
            {loading && 
            Array.from({ length: 10 }).map((_, index) => (
                <VacancyCardSkeleton key={index} />
            ))}

            {!loading && error && (
                <Text size="lg" c="red" mt="md">
                    {error}
                </Text>
            )}

            {!loading && !error && items.length === 0 && (
                <Text size="lg" c="#0F0F10" mt="md">
                    Вакансии не найдены
                </Text>
            )}

            {!loading && !error && items.length > 0 && (
                <>
                {items.map((vacancy) => (
                    <VacancyCard key={vacancy.id} vacancy={vacancy} />
                ))}

                <Group justify="center" mt="md">
                    <Pagination 
                    total={pages}
                    value={page}
                    onChange={handlePageChange}
                    radius="md"
                    size="md"
                    />
                </Group>
                </>
            )}
        </Stack>
    )
 }