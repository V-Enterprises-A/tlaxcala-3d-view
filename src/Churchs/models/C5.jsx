import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F.geometry} material={materials.lambert2} position={[0.385, 0, -5.917]} rotation={[Math.PI / 2, 0, 0]} scale={1.13} />
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh geometry={nodes.Mesh002.geometry} material={materials.Ladrillo___Hexagonal_2} />
                <mesh geometry={nodes.Mesh002_1.geometry} material={materials.Pintura__Oroen_Beige} />
                <mesh geometry={nodes.Mesh002_2.geometry} material={materials['Pintura__Gris_Claro.001']} />
                <mesh geometry={nodes.Mesh002_3.geometry} material={materials.Madera___Pino_Granulado_Horizontal} />
                <mesh geometry={nodes.Mesh002_4.geometry} material={materials.Metal___Acero_Inoxidable} />
                <mesh geometry={nodes.Mesh002_5.geometry} material={materials.Metal___Hierro} />
                <mesh geometry={nodes.Mesh002_6.geometry} material={materials.Pintura__Arena_Beige} />
                <mesh geometry={nodes.Mesh002_7.geometry} material={materials.Ladrillo___Viejo_Natural} />
                <mesh geometry={nodes.Mesh002_8.geometry} material={materials.Hormig_n___02} />
                <mesh geometry={nodes.Mesh002_9.geometry} material={materials.Ladrillo___Aparejo_Com_n} />
                <mesh geometry={nodes.Mesh002_10.geometry} material={materials.Hormig_n___04} />
                <mesh geometry={nodes.Mesh002_11.geometry} material={materials.Hormig_n___04_1} />
                <mesh geometry={nodes.Mesh002_12.geometry} material={materials.Vidrio___Claro_R_pido} />
                <mesh geometry={nodes.Mesh002_13.geometry} material={materials.Madera___Caoba_Horizontal} />
                <mesh geometry={nodes.Mesh002_14.geometry} material={materials['Estuco___Blanco_Fino.001']} />
                <mesh geometry={nodes.Mesh002_15.geometry} material={materials.Madera___Caoba_Vertical} />
                <mesh geometry={nodes.Mesh002_16.geometry} material={materials.Piedra___Caliza_Fina} />
                <mesh geometry={nodes.Mesh002_17.geometry} material={materials.Baldosas___Tostado_30x30} />
                <mesh geometry={nodes.Mesh002_18.geometry} material={materials.Madera___Nogal_Vertical} />
                <mesh geometry={nodes.Mesh002_19.geometry} material={materials.Pintura__Negro_Marfil} />
                <mesh geometry={nodes.Mesh002_20.geometry} material={materials.Pintura__Cadmio_Naranja} />
                <mesh geometry={nodes.Mesh002_21.geometry} material={materials.Revestimiento___Medio} />
                <mesh geometry={nodes.Mesh002_22.geometry} material={materials['Pavimento___Asfalto_Claro.001']} />
                <mesh geometry={nodes.Mesh002_23.geometry} material={materials.Cer_mico___Porcelana} />
                <mesh geometry={nodes.Mesh002_24.geometry} material={materials.Pintura__Azul_Royal} />
                <mesh geometry={nodes.Mesh002_25.geometry} material={materials['Pintura__Blanco_Satinado.001']} />
                <mesh geometry={nodes.Mesh002_26.geometry} material={materials.Ladrillo___Aparejo_Flamenco} />
                <mesh geometry={nodes.Mesh002_27.geometry} material={materials.Pintura__Titanio_Blanco} />
                <mesh geometry={nodes.Mesh002_28.geometry} material={materials.Baldosas___Blanco_Mate_15x15} />
                <mesh geometry={nodes.Mesh002_29.geometry} material={materials.Pintura__Gris_Oscuro} />
            </group>
        </group>
    )
}

export default C2