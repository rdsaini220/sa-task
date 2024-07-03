"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useFetchData from "@/hooks/useFetchData";
import PeopleCard from "@/components/PeopleCard";


export default function Home({ searchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(Number(searchParams?.page) || 1);
  const { resData, isLoading, isfetchData } = useFetchData()
  useEffect(() => {
    if(page){
      isfetchData(`/people/?page=${page}`)
      const query = page ? `?page=${page}` : "";
      router.push(`${pathname}${query}`);
    }
  }, [page]);
  return (
    <Box p={4}>
        <SimpleGrid columns={5} spacing={10}>
            {resData?.results?.map((person) => <PeopleCard key={person?.name} person={person}/>)}
        </SimpleGrid>
        {
          resData?.results?.length > 0 &&
            <Box mt={10}>
              <Button mr={5} onClick={() => setPage(pre => pre -= 1)} isDisabled={isLoading || page === 1}>
                Previous
              </Button>
              <Button onClick={() => setPage(pre => pre += 1)} isDisabled={ isLoading || (Math.ceil(resData?.count/10) <= page)}>
                Next
              </Button>
            </Box>
        }
      </Box>
  );
}
