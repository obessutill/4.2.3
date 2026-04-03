import { Container, Flex } from '@mantine/core';
import { Header } from './components/Header';
import { SearchSection } from './components/SearchSection';
import { FiltersPanel } from './components/FiltersPanel';
import { VacancyList } from './components/VacancyList';

function App() {
  return (
    <>
    <Header />

    <div style={{ backgroundColor: '#F1F3F5', minHeight: '100vh' }}>
      <SearchSection />

      <Container size="lg" py={24}>
        <Flex align="flex-start" gap={24}>
          <FiltersPanel />
          <VacancyList />
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default App;