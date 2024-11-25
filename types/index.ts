export interface Review {
    id: number,
    name: string,
    job: string,
    image: string,
    description: string,
}
export interface Reviews {
    reviews: Review[]
}
export interface Project { 
    id: number,
    name: string,
    label: string,
    small_description: string,
    description: string,
    preview: string | null,
    image: string,
    technology: string[],
}
export interface TechnologyType { 
    label: string,
    icon: string,
    link: string,
}