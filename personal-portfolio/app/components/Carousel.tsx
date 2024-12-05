"use client";

import React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 px-4 text-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-white">Alguns Designers</h2>
      <div className="mx-auto max-w-3xl">
        <Carousel setApi={setApi} className="w-full max-w-3xl">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src="/lowanx.png"
                    alt="Design 3"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src="/lowanx.png"
                    alt="Design 2"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src="/lowanx.png"
                    alt="Design 3"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3">
            &larr;
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3">
            &rarr;
          </CarouselNext>
        </Carousel>
        <div className="py-4 text-center text-lg text-gray-300">
          Slide {current} de {count}
        </div>
      </div>
    </section>
  );
}
