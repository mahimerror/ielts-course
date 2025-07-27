import React from "react";
import background from "@/app/assets/images/background.jpg";
import Image from "next/image";
import Container from "../shared/Container";

const HeroSection = () => {
  return (
    <section className="relative min-h-[300px] flex">
      <Container className="relative text-white py-10">
        <div className="md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] h-full flex flex-col justify-center gap-2">
          <h1 className="text-4xl font-semibold">
            IELTS Course by Munzereen Shahid
          </h1>
          <p>(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
          <p className="text-primaryDescription">
            Get complete preparation of Academic IELTS and General Training
            IELTS in one course! Join our IELTS Course today to achieve your
            desired band score under the guidance of the best IELTS Instructor
            in the country.
          </p>
        </div>
      </Container>
      <Image
        src={background}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 order-1"
      />
    </section>
  );
};

export default HeroSection;
