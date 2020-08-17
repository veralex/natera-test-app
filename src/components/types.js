import { shape, string, bool, number } from 'prop-types';

export const postType = shape({
    id: string.isRequired,
    title: string,
    body: string,
    published: bool,
    author_id: string.isRequired,
    image: string,
});

export const projectType = shape({
    id: string.isRequired,
    name: string.isRequired,
    status: number.isRequired,
    company: string,
    release_date: string,
});
