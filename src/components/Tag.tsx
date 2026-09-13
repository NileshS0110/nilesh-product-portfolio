import { cn } from '@/lib/utils';

type TagProps = {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'accent';
  className?: string;
};

export default function Tag({ children, variant = 'default', className }: TagProps) {
  const base = 'tag';
  const variants = {
    default: '',
    brand: 'tag-brand',
    accent: 'tag-accent',
  };
  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
