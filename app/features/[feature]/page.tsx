"use client";
import React,{useEffect, useState} from "react";
import Header  from '@/components/header'
import Steps from '@/components/feature_steps'
import SubFooter from '@/components/home/sub_footer'
import Footer from '@/components/home/footer'
import features from "@/components/features.json";
import feature1 from '../../../public/feature1.png'
import feature4 from '../../../public/feature4.png'
import feature6 from '../../../public/feature6.png'
import f_img1 from '../../../public/Active_Listening.gif'
import f_img2 from '../../../public/business-tools.gif'
import f_img3 from '../../../public/unlimited_memory.gif'
import f_img4 from '../../../public/jumpstart.gif'
import f_img5 from '../../../public/creative_work.gif'
import f_img6 from '../../../public/lifestyle.gif'
import Image from 'next/image'
export interface FeaturePageProps {
  params: {
    feature: string
  }
}
export default function FeaturesPage({ params}:FeaturePageProps) {
  const [featureRoute, setFeatureRoute] = useState(params.feature);
  const [feature, setFeature] = useState(features.find((feature) => feature.route === params.feature));
  const main_images = [f_img1,f_img2,f_img3,f_img4,f_img5,f_img6]
  React.useEffect(() => {
      setFeatureRoute(params.feature);
      setFeature(features.find((feature) => feature.route === params.feature));
  }, [params]);
  return (
    <div className='bg-black flex flex-col'>
    <Header />
    <div className='flex flex-col items-center pt-36'>
      <p className='text-5xl text-center leading-[4rem] max-md:text-3xl max-md:px-4' dangerouslySetInnerHTML={{ __html: feature?.title ? feature?.title : '' }}></p>
      <p className='pt-8 text-lg max-w-[600px] text-center max-md:text-sm max-md:px-4'>{feature?.description}</p>
      <div className='flex max-md:flex-col justify-center pt-32 max-md:pt-16 gap-12'>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature1} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>{feature?.sub_title1} </p>
          <p className='pt-3 text-xs text-center'>{feature?.sub_content1}</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature4} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>{feature?.sub_title2} </p>
          <p className='pt-3 text-xs text-center'>{feature?.sub_content2}</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <div className="text-center p-2 bg-[length:100%_100%] bg-[url('../public/bg_feature.png')]">
            <Image alt="feature" src={feature6} width='48' height='48' />
          </div>
          <p className='text-sm pt-6'>{feature?.sub_title3} </p>
          <p className='pt-3 text-xs text-center'>{feature?.sub_content3}</p>
        </div>
      </div>
    </div>
    <Steps step1={feature?.step1} step2={feature?.step2} step3={feature?.step3} content1={feature?.content1} content2={feature?.content2} content3={feature?.content3} main_image={main_images[feature?.index ? feature.index : 0]}/>
    <SubFooter />
    <Footer />
    </div>
  )
}
