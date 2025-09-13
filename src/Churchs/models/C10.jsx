import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F1.geometry} material={materials['M_cintillaVF.001']} position={[-0.243, 0.217, 2.338]} rotation={[Math.PI / 2, 0, 0]} scale={1.196} />
            <group position={[3.145, 0, 1.033]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.075}>
                <mesh geometry={nodes.Mesh1485.geometry} material={materials.GDLM17_Hormig_n___10_131740} />
                <mesh geometry={nodes.Mesh1485_1.geometry} material={materials.GDLM18_Metal___Bronce} />
                <mesh geometry={nodes.Mesh1485_2.geometry} material={materials.Piedra___Granito_Rojo} />
                <mesh geometry={nodes.Mesh1485_3.geometry} material={materials.Pintura__Amarillo_Ocre} />
                <mesh geometry={nodes.Mesh1485_4.geometry} material={materials['Pintura__Gris_Claro.005']} />
                <mesh geometry={nodes.Mesh1485_5.geometry} material={materials.GDLM20_Vidrio___Claro_R_pido} />
                <mesh geometry={nodes.Mesh1485_6.geometry} material={materials.Tejas___Francesas_Rojo} />
                <mesh geometry={nodes.Mesh1485_7.geometry} material={materials['Pintura__Blanco_Satinado.004']} />
                <mesh geometry={nodes.Mesh1485_8.geometry} material={materials['Metal___Aluminio.001']} />
                <mesh geometry={nodes.Mesh1485_9.geometry} material={materials.GDLM19_Agua___Estanque_13174} />
                <mesh geometry={nodes.Mesh1485_10.geometry} material={materials.GDLM17_Hormig_n___10_131740_1} />
                <mesh geometry={nodes.Mesh1485_11.geometry} material={materials['Hormig_n___02.005']} />
                <mesh geometry={nodes.Mesh1485_12.geometry} material={materials['Metal___Hierro.002']} />
                <mesh geometry={nodes.Mesh1485_13.geometry} material={materials['Vidrio___Azul.002']} />
                <mesh geometry={nodes.Mesh1485_14.geometry} material={materials['Pavimento___Asfalto_Claro.003']} />
                <mesh geometry={nodes.Mesh1485_15.geometry} material={materials.Pintura__Cadmio_Amarillo} />
            </group>
        </group>
    )
}

export default C2