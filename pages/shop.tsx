import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import { Text, Button,Card, Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import NFT from "../components/NFT";

export default function Shop()  {
    const { contract } = useContract(TOOLS_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);

    return (
        <Container maxW={"1200px"}>
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link
                    href="/"
                >
                    <Button>Back</Button>
                </Link>
            </Flex>
            <Heading mt={"40px"}>Shop</Heading>
            <br></br>
            <Text>Purchase item to increase your earnings.</Text>
            <br></br>
            {!nfts ? (
                <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
                    <Spinner />
                </Flex>
            ) : (
                <SimpleGrid columns={3} spacing={10}>
                    {nfts?.map((nftItem) => (
                        <NFT 
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </SimpleGrid>
            )}
            <br></br>
            <br></br>
            <SimpleGrid columns={3} spacing={10}>
        <Card p={5}>
          <Heading>Rooster:</Heading>
          <SimpleGrid columns={1} spacing={10}>
           <h1>Absolutely! 🎉 Just imagine: for only 0.1 dollar (0.00024 BNB),
             you can enlist the help of a Rooster to produce 1 MYC every single
              minute! That's a whopping 1440 MYC in just one day and an incredible
               43,200 in a month! 🐓💰 Let's seize this incredible opportunity to
                make your poultry farm dreams come true! 🚀</h1>
          </SimpleGrid>
        </Card>
        <Card p={5}>
          <Heading>Specialized Feed:</Heading>
            <h1>What fantastic news awaits! 🎉 With just 0.2 dollars, you can unlock the extraordinary potential
                 of specialized nourishment for your hens! 🐔✨ By enriching their diet with these unique feeds,
                  you can double their productivity, resulting in an astounding 2 MYC per minute! That's an eye-popping
                   2,880 MYC in a single day and an incredible 86,400 in a month! 😱 But hold on tight, because there's
                    even more excitement in store! By combining the dynamic duo of Rooster and Feed, you can catapult your
                     earnings to an astonishing 129,600 worth of MYC! 🚀 
                Let's seize this golden chance and witness your profits soar to new heights! 🌟</h1>
        </Card>
        <Card p={5}>
          <Heading>Alien-Tech Incubator:</Heading>
           <h1>
           Exciting news ahead! 🎉 For just 0.4 dollars, you can harness the phenomenal power of the Alien-Tech Incubator!
            🥚🚀 This incredible machine turbocharges the hatching process, boasting a lightning-fast 3 times the speed of
             a Rooster! 🐓💨 That's an impressive 3 MYC every minute, totaling a whopping 4,320 MYC in a single day and a
              jaw-dropping 129,600 in a month! 😱 But hold onto your hats because when you combine the forces of Rooster,
               Feed, and Incubator, you're in for an exhilarating ride of earnings, reaching an astonishing 259,200 MYC!
            💰✨ Don't miss out on this opportunity to supercharge your poultry farm and watch your profits skyrocket! 🐣🚀
           </h1>
        </Card>
      </SimpleGrid>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    )
};