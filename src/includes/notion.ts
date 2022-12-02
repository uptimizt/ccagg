import { Client } from "@notionhq/client";

const notion = new Client({auth: process.env.REACT_APP_NOTION_TOKEN});
const dbId: string = process.env.REACT_APP_NOTION_DB || '';

// console.log(notion);
export const db = async () => {
    return await notion.databases.query({
        database_id: dbId
    })
}

export async function getItems() {
    const items = await notion.databases.query({
      database_id: dbId,
    });
    return items;
}