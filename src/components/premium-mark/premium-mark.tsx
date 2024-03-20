type PremiumMarkProps = {
  className: string;
};

export function PremiumMark({ className }: PremiumMarkProps) {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}
