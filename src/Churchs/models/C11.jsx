import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
      <mesh geometry={nodes.logos_F.geometry} material={materials.lambert2} position={[0.146, 0.392, 4.62]} rotation={[Math.PI / 2, 0, 0]} scale={1.333} />
      <group position={[-0.771, -0.61, -1.458]} rotation={[Math.PI / 2, 0, 0]} scale={0.352}>
        <mesh geometry={nodes.Mesh008.geometry} material={materials.GDLM10_Metal___Bronce} />
        <mesh geometry={nodes.Mesh008_1.geometry} material={materials.Color_M08} />
        <mesh geometry={nodes.Mesh008_2.geometry} material={materials.GDLM19_Pintura__Antracita} />
        <mesh geometry={nodes.Mesh008_3.geometry} material={materials.GDLM15_Hierba___Marr_n_123} />
        <mesh geometry={nodes.Mesh008_4.geometry} material={materials.GDLM14_Piedra___Granito_Gris} />
        <mesh geometry={nodes.Mesh008_5.geometry} material={materials.GDLM24_Metal___Valla_Alambre} />
        <mesh geometry={nodes.Mesh008_6.geometry} material={materials.Vidro1} />
        <mesh geometry={nodes.Mesh008_7.geometry} material={materials.Color_G01} />
        <mesh geometry={nodes.Mesh008_8.geometry} material={materials.GDLM17_Hormig_n___04_127} />
        <mesh geometry={nodes.Mesh008_9.geometry} material={materials.Color_C07} />
        <mesh geometry={nodes.Mesh008_10.geometry} material={materials.GDLM13_Baldosas___Mosaico_Az} />
        <mesh geometry={nodes.Mesh008_11.geometry} material={materials.GDLM18_Pintura__Gris_Claro} />
        <mesh geometry={nodes.Mesh008_12.geometry} material={materials.GDLM20_Hormig_n___02_131} />
        <mesh geometry={nodes.Mesh008_13.geometry} material={materials.GDLM21_Pavimento___Asfalto_O} />
        <mesh geometry={nodes.Mesh008_14.geometry} material={materials.GDLM22_Piedra___Arenisca_01_} />
        <mesh geometry={nodes.Mesh008_15.geometry} material={materials.GDLM23_Canter_a___02_137} />
        <mesh geometry={nodes.Mesh008_16.geometry} material={materials.GDLM20_Hormig_n___02_131_1} />
        <mesh geometry={nodes.Mesh008_17.geometry} material={materials.GDLM16_Canter_a___12_125} />
        <mesh geometry={nodes.Mesh008_18.geometry} material={materials.GDLM12_Pintura___xido_de_Plo} />
        <mesh geometry={nodes.Mesh008_19.geometry} material={materials.Basic_Tile} />
        <mesh geometry={nodes.Mesh008_20.geometry} material={materials._Color_B08_1} />
        <mesh geometry={nodes.Mesh008_21.geometry} material={materials._Color_C08_1} />
        <mesh geometry={nodes.Mesh008_22.geometry} material={materials.Groundcover_Sand_Smooth} />
        <mesh geometry={nodes.Mesh008_23.geometry} material={materials.Water_Pool_Light} />
      </group>
    </group>
    )
}

export default C2