import AnimalCard from '@/components/animal-card';
import AnimalCardSkeleton from '@/components/animal-card-skeleton';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import animals, { Animal } from '@/data/animals';
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


export default function Products() {
  const [loading, handleLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(animals);
  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || 'name';


  const handleFetching = async () => {
    handleLoading(true)

    let result = animals;
    if (query)
      result = result.filter(animal => animal.name.toLowerCase().includes(query.toLowerCase())
        || animal.description.toLowerCase().includes(query.toLowerCase())
      );
    result.sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    setFilteredAnimals(result);
    handleLoading(false);
  }

  useEffect(() => { handleFetching() }, [query, sort]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchParams(prev => {
      prev.set('query', newQuery);
      return prev;
    });
  };

  const handleSort = (value: string) => {
    setSearchParams(prev => {
      prev.set('sort', value);
      return prev;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">כל התיפלצים</h1>
      <div className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="חיפוש..."
          value={query}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Select dir='rtl' onValueChange={handleSort} defaultValue={sort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">לפי שם</SelectItem>
            <SelectItem value="price">לפי מחיר</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredAnimals.map((animal) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {
                loading ?
                  <AnimalCardSkeleton /> :
                  <AnimalCard {...animal} />
              }
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}