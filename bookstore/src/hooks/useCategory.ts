import {useEffect, useState} from "react";
import {Category} from "../models/category.model";
import {fetchCategories} from "../api/category.api";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories().then((category) => {
            if (!category) return;
            const category_all = [
                {
                    id: null, name: '전체'
                },
                ...category];
            setCategory(category_all);
        });
    }, []);

    return {category};
}