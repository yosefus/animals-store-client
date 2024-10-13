import { Animal } from "./animals";
import { Category } from "./categories";
import { AXIOS } from "./server-config";


// category 
export const fetchCategories = async (): Promise<Category[]> => (await AXIOS.get('categories')).data

export const fetchCategory = async (slug: string): Promise<{ category: Category, animals: Animal[] }> =>
   (await AXIOS.get(`categories/${slug}?isPopulate=true`)).data



// animal
export const fetchAnimalsSearch = async ({ query, sort }: { query: string, sort: string }): Promise<{animals: Animal[], total: number}> =>
   (await AXIOS.get(`animals/search?search=${query}&sort=${sort}`)).data


export const fetchOneAnimal = async (id: string): Promise<Animal> => (await AXIOS.get(`animals/${id}`)).data