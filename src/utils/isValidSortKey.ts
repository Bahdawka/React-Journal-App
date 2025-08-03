import { SORT_KEYS } from '../constants/index'

export const isValidSortKey = (key: string | null): boolean => {
  return SORT_KEYS.includes(key || '')
}