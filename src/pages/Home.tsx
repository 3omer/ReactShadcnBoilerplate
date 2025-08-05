import Wrapper from "@/components/wrapper";

import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import BlockQuotes from "@/components/typo/BlockQuotes";

const Home = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center  h-full w-full">
        <H1>Home</H1>
        <H2>Someone rightly said</H2>
        <BlockQuotes>There's no place like 127.0.0.1</BlockQuotes>
      </div>
    </Wrapper>
  );
};

export default Home;
