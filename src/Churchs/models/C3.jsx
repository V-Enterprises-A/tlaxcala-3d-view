import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.muroLogos.geometry} material={materials['M_muroLogos.002']} position={[0, 0, -5.561]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1.661} />
            <group position={[0, 0, -3.891]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh geometry={nodes.Mesh001.geometry} material={materials.Pintura__Blanco_Satinado} />
                <mesh geometry={nodes.Mesh001_1.geometry} material={materials.Hormig_n___02} />
                <mesh geometry={nodes.Mesh001_2.geometry} material={materials.Hormig_n___02_1} />
                <mesh geometry={nodes.Mesh001_3.geometry} material={materials.Pintura__Gris_Claro} />
                <mesh geometry={nodes.Mesh001_4.geometry} material={materials.Madera___Pino_Granulado_Vertical} />
                <mesh geometry={nodes.Mesh001_5.geometry} material={materials.Pintura__Burdeos} />
                <mesh geometry={nodes.Mesh001_6.geometry} material={materials.Piedra___Granito_Gris} />
                <mesh geometry={nodes.Mesh001_7.geometry} material={materials.Madera___Caoba_Horizontal} />
                <mesh geometry={nodes.Mesh001_8.geometry} material={materials.Madera___Caoba_Vertical} />
                <mesh geometry={nodes.Mesh001_9.geometry} material={materials.Madera___Pino_Granulado_Horizontal} />
                <mesh geometry={nodes.Mesh001_10.geometry} material={materials.Tablas___03} />
                <mesh geometry={nodes.Mesh001_11.geometry} material={materials.Pintura__Antracita} />
                <mesh geometry={nodes.Mesh001_12.geometry} material={materials.Pintura__Melocot_n} />
                <mesh geometry={nodes.Mesh001_13.geometry} material={materials.Canter_a___12} />
                <mesh geometry={nodes.Mesh001_14.geometry} material={materials.Metal___Hierro} />
                <mesh geometry={nodes.Mesh001_15.geometry} material={materials.Metal___Aluminio} />
                <mesh geometry={nodes.Mesh001_16.geometry} material={materials.Baldosas___Tostado_25x25} />
                <mesh geometry={nodes.Mesh001_17.geometry} material={materials.Metal___Acero_Inoxidable} />
                <mesh geometry={nodes.Mesh001_18.geometry} material={materials.Madera___Roble_Claro} />
                <mesh geometry={nodes.Mesh001_19.geometry} material={materials.Hormig_n___04} />
                <mesh geometry={nodes.Mesh001_20.geometry} material={materials.Vidrio___Claro_R_pido} />
                <mesh geometry={nodes.Mesh001_21.geometry} material={materials.PEN_MATERIAL4} />
                <mesh geometry={nodes.Mesh001_22.geometry} material={materials.Estuco___Amarillo_Rugoso} />
                <mesh geometry={nodes.Mesh001_23.geometry} material={materials.Piedra___Granito_Rojo} />
                <mesh geometry={nodes.Mesh001_24.geometry} material={materials.Estuco___Blanco_Fino} />
                <mesh geometry={nodes.Mesh001_25.geometry} material={materials.Corteza__Caduco} />
                <mesh geometry={nodes.Mesh001_26.geometry} material={materials.Pintura__Oroen_Beige} />
                <mesh geometry={nodes.Mesh001_27.geometry} material={materials.Estuco___Blanco_Rugoso} />
                <mesh geometry={nodes.Mesh001_28.geometry} material={materials.Metal___Hierro1} />
                <mesh geometry={nodes.Mesh001_29.geometry} material={materials.PEN_MATERIAL2} />
            </group>
        </group>
    )
}

export default C2