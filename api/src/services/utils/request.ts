import axios from "axios";
import cheerio from "cheerio";

export const requestUrl = async (url: string): Promise<cheerio.Root | undefined> => {
    try{
        const { data } = await axios.get(url);
        return cheerio.load(data);
    }catch(_err){
        return undefined;
    }
};