function formatRating (num: number):string {
  return `${(Math.round(num) * 100 / 5).toString() }%`;
}

export default formatRating;
