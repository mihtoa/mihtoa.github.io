type Props = {
  children?: JSX.Element
};

export default function Window({ children }: Props) {
  return (
    <main className="window">{children && (children)}</main>
  );
}
