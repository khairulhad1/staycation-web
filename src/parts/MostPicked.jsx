import Button from "../elements/button";

export default function MostPicked(props) {
  return (
    <section
      className="container mx-auto pt-24 mb-24"
      ref={props.mostPickedRef}
    >
      <h4 className="text-2xl font-medium text-slate-900 mb-6">Most Picked</h4>
      <div className="grid grid-rows-2 grid-cols-3 gap-7">
        {props.data.map((items, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`rounded-[15px] overflow-hidden ${
                index === 0 ? "row-span-2 h-[470px]" : "h-[216px]"
              } transition-transform hover:scale-105`}
            >
              <div className="relative">
                <div className="absolute text-white bg-pink-500 py-2 px-5 top-0 right-0 rounded-bl-lg z-10">
                  ${items.price}{" "}
                  <span className="font-light">per {items.unit}</span>
                </div>
                <figure className="absolute z-0">
                  <Button type="link" href={`/properties/${items._id}`}>
                    <img
                      src={items.imageUrl}
                      alt={items.name}
                      className="object-contain transition-transform hover:scale-110"
                    />
                  </Button>
                </figure>
                <div
                  className={`absolute left-5 z-20 text-white font-semibold${
                    index === 0 ? " -bottom-[420px]" : " top-36"
                  } transition-color hover:text-pink-500`}
                >
                  <Button
                    type="link"
                    href={`/properties/${items._id}`}
                    className="text-lg"
                  >
                    {items.name}
                  </Button>
                  <div className="text-sm text-slate-100 font-normal">
                    {items.city}, {items.country}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
