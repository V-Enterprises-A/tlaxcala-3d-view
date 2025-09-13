import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F1.geometry} material={materials['M_cintillaVF.001']} position={[-0.043, -0.417, -3.31]} rotation={[Math.PI / 2, 0, 0]} scale={1.12} />
            <group position={[-0.353, 0.093, 3.638]} rotation={[Math.PI / 2, 0, -1.574]} scale={0.003}>
                <mesh geometry={nodes.Mesh004.geometry} material={materials['Baldosas - Tostado 30x30']} />
                <mesh geometry={nodes.Mesh004_1.geometry} material={materials['Estuco - Blanco Fino']} />
                <mesh geometry={nodes.Mesh004_2.geometry} material={materials['Estuco - Blanco Rugoso']} />
                <mesh geometry={nodes.Mesh004_3.geometry} material={materials['Estuco - Rojo Rugoso']} />
                <mesh geometry={nodes.Mesh004_4.geometry} material={materials.GDLM26_bark01} />
                <mesh geometry={nodes.Mesh004_5.geometry} material={materials.GDLM27_leafs1} />
                <mesh geometry={nodes.Mesh004_6.geometry} material={materials['Hormigón - 02']} />
                <mesh geometry={nodes.Mesh004_7.geometry} material={materials['Hormigón - 04']} />
                <mesh geometry={nodes.Mesh004_8.geometry} material={materials['Hormigón - 10']} />
                <mesh geometry={nodes.Mesh004_9.geometry} material={materials['Ladrillo - Aparejo Corrido']} />
                <mesh geometry={nodes.Mesh004_10.geometry} material={materials['Madera - Caoba Horizontal']} />
                <mesh geometry={nodes.Mesh004_11.geometry} material={materials['Metal - Hierro']} />
                <mesh geometry={nodes.Mesh004_12.geometry} material={materials['Pintura- Arena Beige']} />
                <mesh geometry={nodes.Mesh004_13.geometry} material={materials['Pintura- Arena Beige (1)']} />
                <mesh geometry={nodes.Mesh004_14.geometry} material={materials['Pintura- Azul Pálido']} />
                <mesh geometry={nodes.Mesh004_15.geometry} material={materials['Pintura- Blanco Satinado']} />
                <mesh geometry={nodes.Mesh004_16.geometry} material={materials['Pintura- Burdeos']} />
                <mesh geometry={nodes.Mesh004_17.geometry} material={materials['Pintura- Gris Claro']} />
                <mesh geometry={nodes.Mesh004_18.geometry} material={materials['Pintura- Gris Oscuro']} />
                <mesh geometry={nodes.Mesh004_19.geometry} material={materials['Pintura- Oroen Ocre']} />
                <mesh geometry={nodes.Mesh004_20.geometry} material={materials['Pintura- Titanio Blanco']} />
                <mesh geometry={nodes.Mesh004_21.geometry} material={materials['Tierra - Marrón']} />
                <mesh geometry={nodes.Mesh004_22.geometry} material={materials['Vidrio - Claro Rápido']} />
            </group>
            <mesh geometry={nodes.piso_extra.geometry} material={materials['Pintura- Arena Beige']} position={[0, -0.844, -10.49]} scale={[4.15, 1, 1]} />
        </group>
    )
}

export default C2