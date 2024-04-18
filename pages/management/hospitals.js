import dynamic from "next/dynamic";
import Hospitals from "@src/modules/management/hospitals";

// const Hospitals = dynamic(() => import("@src/modules/management/hospitals"), {
//   ssr: false,
// });

// name the page according to its purpose
const HospitalsPage = ({ data }) => <Hospitals />;
export default HospitalsPage;

export async function getServerSideProps() {
  let data = {};

  return {
    props: {
      data,
    },
  };
}
