import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Lineup from "./components/Lineup";
import Clock from "./components/Clock";
import Product from "./components/Product";
import Print from "./components/Print";
import Fabric from "./components/Fabric";
import Night from "./components/Night";
import Shop from "./components/Shop";
import Looks from "./components/Looks";
import Fit from "./components/Fit";
import Featured from "./components/Featured";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Seam from "./components/Seam";

const C = { khaki: "#A49A74", studio: "#E1E5EA", clock: "#D3D9E1", fabric: "#DDD2BE", looks: "#0B2530", teal: "#0E3A4C", nightEnd: "#07161D", sky: "#E3EDF9", tile: "#E8DFD0", night: "#07161D", snow: "#F7F8FA", ink: "#0E0F11", orange: "#EC6A2C" };

export default function Page() {
  return (
    <>
      <Loader />
      <Nav />
      <main className="k-main">
        <Hero />
        <Seam kind="diag" from={C.khaki} />
        <Lineup />
        <Seam kind="curve" from={C.studio} />
        <Clock />
        <Seam kind="stairs" from={C.clock} />
        <Product />
        <Seam kind="panel" from={C.sky} />
        <Print />
        <Seam kind="notch" from={C.tile} />
        <Fabric />
        <Seam kind="wash" from={C.fabric} to={C.teal} h={40} />
        <Night />
        <Seam kind="diagR" from={C.nightEnd} />
        <Shop />
        <Seam kind="curve" from={C.snow} />
        <Looks />
        <Seam kind="diag" from={C.looks} />
        <Fit />
        <Seam kind="stairs" from={C.studio} />
        <Featured />
        <Seam kind="notch" from={C.ink} />
        <Join />
        <Seam kind="diagR" from={C.orange} />
        <Footer />
      </main>
    </>
  );
}
