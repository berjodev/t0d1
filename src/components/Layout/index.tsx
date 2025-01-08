type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="w-full h-full p-5">{children}</div>;
}
