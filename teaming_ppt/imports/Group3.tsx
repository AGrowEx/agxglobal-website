import imgRectangle1 from "figma:asset/2b1e9ffced6dffb8d8fe327f351d3f1cc4d10856.png";
import imgEzgif37577B686A1RemovebgPreview17 from "figma:asset/eb933faa1eabb1e1c12c8bfd5d5e57638dfca77f.png";
import imgRectangle14 from "figma:asset/a9315f56cc04aad3f4c09446ebe72901c8e06ef0.png";

function MaskGroup() {
  return (
    <div className="absolute contents left-[65px] top-[8px]" data-name="Mask group">
      <div className="absolute bg-[rgba(255,255,255,0.69)] h-[25px] left-[75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_0px] mask-size-[26px_26px] top-[8px] w-[16px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[65px] top-[8px]" data-name="Mask group">
      <div className="absolute bg-[rgba(255,255,255,0.69)] h-[25px] left-[75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_0px] mask-size-[26px_26px] top-[8px] w-[16px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="-translate-y-1/2 absolute bg-clip-text flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[26px] text-[20px] text-[transparent] top-[26px] w-[60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 60 20\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(6.65 -1.6317e-7 4.895e-7 19.95 -6.5 20)\\' opacity=\\'0.8500000238418579\\'><rect height=\\'9.0226\\' width=\\'91.203\\' fill=\\'url(%23grad)\\' id=\\'quad\\' shape-rendering=\\'crispEdges\\'/><use href=\\'%23quad\\' transform=\\'scale(1 -1)\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 1)\\'/><use href=\\'%23quad\\' transform=\\'scale(-1 -1)\\'/></g><defs><linearGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' x2=\\'5\\' y2=\\'5\\'><stop stop-color=\\'rgba(138,182,85,0.85)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(108,169,107,0.8875)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(79,156,130,0.925)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(49,143,152,0.9625)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(20,129,174,1)\\' offset=\\'1\\'/></linearGradient></defs></svg>')" }}>
        <p className="leading-[normal]">hoom</p>
      </div>
      <MaskGroup />
      <div className="absolute h-[43px] left-0 top-0 w-[32px]" data-name="ezgif-3-7577b686a1-removebg-preview 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEzgif37577B686A1RemovebgPreview17} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[26px] text-[20px] text-[rgba(255,255,255,0.85)] top-[26px] w-[60px]">
        <p className="leading-[normal]">hoom</p>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute bg-[#fdfdfd] h-[43px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_2px] mask-size-[32px_43px] top-[-2px] w-[26px]" style={{ maskImage: `url('${imgRectangle14}')` }} />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <MaskGroup2 />
    </div>
  );
}