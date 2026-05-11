import { API_KEY, API_URL } from "@/config.ts"
import type { Location } from "@/definitions"

export async function getLocations(search: string): Promise<Location[]> {
    const response = await fetch(`${API_URL}?q=${search}&limit=5&appid=${API_KEY}`)
    if (!response.ok) {
        throw new Error(`Ошибка загрузки локаций: ${response.status}`)
    }
    const data = await response.json()
    return data as Location[]
}
