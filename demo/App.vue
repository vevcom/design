<template>
  <Wrapper>
    <Fig :src="ohma"></Fig>
    <Title size="xlarge">Extra Large Title</Title>
    <Title size="large">Large Title</Title>
    <Title size="medium">Medium Title</Title>
    <Title>Small Title</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus ex
      quis consectetur feugiat. Aliquam sed elit quam. Nulla enim nisl, varius
      sed tortor vitae, posuere eleifend lacus. Quisque efficitur tincidunt
      velit, sed viverra nunc laoreet eu. Duis tincidunt, enim ac semper
      fringilla, leo neque efficitur est, id commodo diam dolor vel massa. Nulla
      at feugiat nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Etiam porta ullamcorper felis, in ornare
      nunc dictum sit amet. Sed elementum nunc nibh, eu lacinia massa porttitor
      in. Etiam vel condimentum libero. Praesent eget hendrerit dolor. Phasellus
      hendrerit turpis arcu, ut finibus odio consectetur ut. Aliquam vitae
      libero ut dolor sollicitudin sollicitudin. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Mauris eu velit id mauris fringilla egestas.
      Pellentesque imperdiet pulvinar velit congue pretium.
    </Paragraph>
    <Table :data="tableData"></Table>
    <Buttons>
      <Button primary>Very good</Button>
      <Button>Okay</Button>
      <Button danger>Not good</Button>
    </Buttons>
  </Wrapper>
</template>

<script>
import ohma from "./assets/ohma.jpg";

export default {
  data: () => ({
    ohma,
    tableData: [
      { cake: "Chocolate", price: 10 },
      { cake: "Cheese", price: 4 },
      { cake: "Rat", price: 1 }
    ]
  })
};
</script>
