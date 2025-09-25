import type { ReactNode } from "react";

type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
};

export function ItemList<T>(props: ItemListProps<T>) {
  const { items, renderItem, className } = props;

  return <div className={className}>{items.map(renderItem)}</div>;
}
