export function HomeFooter() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-row px-8 py-4 justify-between items-center border-t-2 border-t-white text-sm bg-gray-900">
      <p>DESENVOLVIMENTO FEITO PELA{" "}
        <span className="text-red-600 hover:text-red-400 text-lg">NN84©</span>
        .
      </p>
      <p className="text-sm text-muted-foreground">
        © {date} Galatas RZ's. Todos os direitos reservados.
      </p>
    </footer>
  );
}
