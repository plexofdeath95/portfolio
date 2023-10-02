import type { Timestamp } from "firebase/firestore";

export interface BlogsSchema
{
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageURL: string;
    dateCreated: Timestamp;
    dateModified: Timestamp;
}