import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import AnimalCard from '@/components/animal-card';
import AnimalCardSkeleton from '@/components/animal-card-skeleton';
import { ErrorAlert } from '@/components/error-alert';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchAnimalsSearch } from '@/data/axios-fetching';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || 'name';

  const { isLoading, error, data, refetch } = useQuery(
    ['animalsSearch', query, sort],
    () => fetchAnimalsSearch({ query, sort }),
    { keepPreviousData: true }
  );

  useEffect(() => {
    refetch();
  }, [query, sort, refetch]);

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

  const animals = data?.animals || [];

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

      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <AnimalCardSkeleton key={index} />
                ))
              : animals.map((animal) => (
                  <motion.div
                    key={animal._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimalCard {...animal} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}