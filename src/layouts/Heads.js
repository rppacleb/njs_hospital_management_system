import Head from "next/head";

const Heads = ({ settings }) => {
  return (
    <Head>
      <title>{settings?.siteName}</title>
      <link rel="icon" href={settings?.favicon} />
      {!!settings?.meta_tags?.length ? (
        <>
          {settings?.meta_tags
            ?.filter((i) => i.htag === "meta")
            .map((i, idx) => (
              <meta key={`key:${idx}`} name={i?.name} content={i?.content} />
            ))}
        </>
      ) : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default Heads;
