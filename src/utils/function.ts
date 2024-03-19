import { Review } from '../types/review';

export function formatRating (num: number):string {
  return `${(Math.round(num) * 100 / 5).toString() }%`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
}

export function sortReviewDate(a: Review, b: Review) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
