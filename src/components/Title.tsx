type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-3xl md:text-5xl font-bold">
      {text}
    </h1>
  );
}