"use client";

import { useEffect } from "react";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader";

const url = process.env.NEXT_PUBLIC_IMG_URL

export default function CharacterDetail({ params }) {
  const { resData, isLoading, isfetchData } = useFetchData();
  useEffect(() => {
    if (params?.id) {
        isfetchData(`/people/${params?.id}/`)
    }
  }, [params?.id]);

  if(isLoading) {
    return <Loader/>
  }
  return (
      <SimpleGrid columns={2} m={4} justifyItems="center">
        <SimpleGrid columns={2} spacing={10} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={`${url}/${params?.id}.jpg`} alt={resData?.name} w='100%' borderRadius="lg" />
            <Box>
                <Text><b>Name:</b> {resData?.name}</Text>
                <Text><b>Height:</b> {resData?.height}</Text>
                <Text><b>Mass:</b> {resData?.mass}</Text>
                <Text><b>Hair Color:</b> {resData?.hair_color}</Text>
                <Text><b>Skin Color:</b> {resData?.skin_color}</Text>
                <Text><b>Eye Color:</b> {resData?.eye_color}</Text>
                <Text><b>Birth Year:</b> {resData?.birth_year}</Text>
                <Text><b>Gender:</b> {resData?.gender}</Text>
            </Box>
        </SimpleGrid>
    </SimpleGrid>
  );
}
