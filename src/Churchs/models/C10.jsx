import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F.geometry} material={materials.lambert2} position={[0.146, 0.22, 4.869]} rotation={[Math.PI / 2, 0, 0]} scale={1.333} />
            <group position={[3.145, 0, 4.265]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.075}>
                <mesh geometry={nodes.Mesh009.geometry} material={materials.GDLM17_Hormig_n___10_131740} />
                <mesh geometry={nodes.Mesh009_1.geometry} material={materials.GDLM18_Metal___Bronce} />
                <mesh geometry={nodes.Mesh009_2.geometry} material={materials.Piedra___Granito_Rojo} />
                <mesh geometry={nodes.Mesh009_3.geometry} material={materials.Pintura__Amarillo_Ocre} />
                <mesh geometry={nodes.Mesh009_4.geometry} material={materials['Pintura__Gris_Claro.004']} />
                <mesh geometry={nodes.Mesh009_5.geometry} material={materials.GDLM20_Vidrio___Claro_R_pido} />
                <mesh geometry={nodes.Mesh009_6.geometry} material={materials.Tejas___Francesas_Rojo} />
                <mesh geometry={nodes.Mesh009_7.geometry} material={materials['Pintura__Blanco_Satinado.003']} />
                <mesh geometry={nodes.Mesh009_8.geometry} material={materials.Metal___Aluminio} />
                <mesh geometry={nodes.Mesh009_9.geometry} material={materials.GDLM19_Agua___Estanque_13174} />
                <mesh geometry={nodes.Mesh009_10.geometry} material={materials.GDLM17_Hormig_n___10_131740_1} />
                <mesh geometry={nodes.Mesh009_11.geometry} material={materials['Hormig_n___02.003']} />
                <mesh geometry={nodes.Mesh009_12.geometry} material={materials['Metal___Hierro.001']} />
                <mesh geometry={nodes.Mesh009_13.geometry} material={materials['Vidrio___Azul.001']} />
                <mesh geometry={nodes.Mesh009_14.geometry} material={materials['Pavimento___Asfalto_Claro.003']} />
                <mesh geometry={nodes.Mesh009_15.geometry} material={materials.Pintura__Cadmio_Amarillo} />
            </group>
        </group>
    )
}

export default C2