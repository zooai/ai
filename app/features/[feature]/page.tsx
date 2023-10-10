"use client";
import React,{useEffect, useState} from "react";
import Header  from '@/components/header'
import Steps from '@/components/home/steps'
import SubFooter from '@/components/home/sub_footer'
import Footer from '@/components/home/footer'
import features from "@/components/features.json";
import feature1 from '../../../public/feature1.png'
import feature4 from '../../../public/feature4.png'
import feature6 from '../../../public/feature6.png'
import Image from 'next/image'
export interface FeaturePageProps {
  params: {
    feature: string
  }
}
export default function FeaturesPage({ params}:FeaturePageProps) {
  const [featureRoute, setFeatureRoute] = useState(params.feature);
  const [feature, setFeature] = useState(features.find((feature) => feature.route === params.feature));
  React.useEffect(() => {
      setFeatureRoute(params.feature);
      setFeature(features.find((feature) => feature.route === params.feature));
  }, [params]);
  return (
    <div className='bg-black flex flex-col'>
    <Header />
    <div className='flex flex-col items-center pt-36'>
      <p className='text-5xl text-center leading-[4rem]' dangerouslySetInnerHTML={{ __html: feature?.title ? feature?.title : '' }}></p>
      <p className='pt-8 text-lg max-w-[600px] text-center'>{feature?.description}</p>
      <div className='flex justify-center pt-32 gap-12'>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature1} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>Choose an Animal </p>
          <p className='pt-3 text-xs text-center'>Always ready to hear your voice, it analyzes conversations to be referenced in the future, with the ability to turn on or off.</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature4} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>Choose an Animal </p>
          <p className='pt-3 text-xs text-center'>Always ready to hear your voice, it analyzes conversations to be referenced in the future, with the ability to turn on or off.</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature6} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>Choose an Animal </p>
          <p className='pt-3 text-xs text-center'>Always ready to hear your voice, it analyzes conversations to be referenced in the future, with the ability to turn on or off.</p>
        </div>
      </div>
    </div>
    <Steps />
    <SubFooter />
    <Footer />
    </div>
  )
}
