import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
      <mesh geometry={nodes.logos_F.geometry} material={materials.lambert2} position={[0, 0, 0.18]} />
      <group position={[0, 0, -1.371]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh003.geometry} material={materials.Pintura__Blanco_Satinado} />
        <mesh geometry={nodes.Mesh003_1.geometry} material={materials.Hormig_n___02} />
        <mesh geometry={nodes.Mesh003_2.geometry} material={materials.Hormig_n___02_1} />
        <mesh geometry={nodes.Mesh003_3.geometry} material={materials.Pintura__Gris_Claro} />
        <mesh geometry={nodes.Mesh003_4.geometry} material={materials.Madera___Pino_Granulado_Vertical} />
        <mesh geometry={nodes.Mesh003_5.geometry} material={materials.Pintura__Burdeos} />
        <mesh geometry={nodes.Mesh003_6.geometry} material={materials.Piedra___Granito_Gris} />
        <mesh geometry={nodes.Mesh003_7.geometry} material={materials.Madera___Caoba_Horizontal} />
        <mesh geometry={nodes.Mesh003_8.geometry} material={materials.Madera___Caoba_Vertical} />
        <mesh geometry={nodes.Mesh003_9.geometry} material={materials.Madera___Pino_Granulado_Horizontal} />
        <mesh geometry={nodes.Mesh003_10.geometry} material={materials.Tablas___03} />
        <mesh geometry={nodes.Mesh003_11.geometry} material={materials.Pintura__Antracita} />
        <mesh geometry={nodes.Mesh003_12.geometry} material={materials.Pintura__Melocot_n} />
        <mesh geometry={nodes.Mesh003_13.geometry} material={materials.Canter_a___12} />
        <mesh geometry={nodes.Mesh003_14.geometry} material={materials.Metal___Hierro} />
        <mesh geometry={nodes.Mesh003_15.geometry} material={materials.Metal___Aluminio} />
        <mesh geometry={nodes.Mesh003_16.geometry} material={materials.Baldosas___Tostado_25x25} />
        <mesh geometry={nodes.Mesh003_17.geometry} material={materials.Metal___Acero_Inoxidable} />
        <mesh geometry={nodes.Mesh003_18.geometry} material={materials.Madera___Roble_Claro} />
        <mesh geometry={nodes.Mesh003_19.geometry} material={materials.Hormig_n___04} />
        <mesh geometry={nodes.Mesh003_20.geometry} material={materials.Vidrio___Claro_R_pido} />
        <mesh geometry={nodes.Mesh003_21.geometry} material={materials.PEN_MATERIAL4} />
        <mesh geometry={nodes.Mesh003_22.geometry} material={materials.Estuco___Amarillo_Rugoso} />
        <mesh geometry={nodes.Mesh003_23.geometry} material={materials.Piedra___Granito_Rojo} />
        <mesh geometry={nodes.Mesh003_24.geometry} material={materials.Estuco___Blanco_Fino} />
        <mesh geometry={nodes.Mesh003_25.geometry} material={materials.Corteza__Caduco} />
        <mesh geometry={nodes.Mesh003_26.geometry} material={materials.Pintura__Oroen_Beige} />
        <mesh geometry={nodes.Mesh003_27.geometry} material={materials.Estuco___Blanco_Rugoso} />
        <mesh geometry={nodes.Mesh003_28.geometry} material={materials.Metal___Hierro1} />
        <mesh geometry={nodes.Mesh003_29.geometry} material={materials.PEN_MATERIAL2} />
      </group>
    </group>
    )
}

export default C2