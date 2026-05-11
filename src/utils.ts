// /**
//  * Функция выполнится только после того, как с момента последнего вызова
//  * пройдёт указанное количество миллисекунд.
//  *
//  * @param func - исходная функция, которую нужно ограничить по частоте вызовов
//  * @param delay - задержка в миллисекундах
//  * @returns декорированную функцию, которую можно вызывать без ограничений
//  */
// export function debounce<T extends (...args: unknown[]) => unknown>(
//     func: T,
//     delay: number,
// ): (...args: Parameters<T>) => void {
//     let timeoutId: ReturnType<typeof setTimeout> | undefined
//     return (...args: Parameters<T>) => {
//         console.log(1, args)
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(() => {
//             func(...args)
//         }, delay)
//     }
// }
