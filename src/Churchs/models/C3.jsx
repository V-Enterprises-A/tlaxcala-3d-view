import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F1.geometry} material={materials.M_cintillaVF} position={[0, 0, -4.189]} rotation={[Math.PI / 2, 0, 0]} scale={1.412} />
            <group position={[0, 0, -6.492]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh geometry={nodes.Mesh006.geometry} material={materials.Pintura__Blanco_Satinado} />
                <mesh geometry={nodes.Mesh006_1.geometry} material={materials['Hormig_n___02.002']} />
                <mesh geometry={nodes.Mesh006_2.geometry} material={materials['Hormig_n___02_1.001']} />
                <mesh geometry={nodes.Mesh006_3.geometry} material={materials['Pintura__Gris_Claro.002']} />
                <mesh geometry={nodes.Mesh006_4.geometry} material={materials.Madera___Pino_Granulado_Vertical} />
                <mesh geometry={nodes.Mesh006_5.geometry} material={materials.Pintura__Burdeos} />
                <mesh geometry={nodes.Mesh006_6.geometry} material={materials.Piedra___Granito_Gris} />
                <mesh geometry={nodes.Mesh006_7.geometry} material={materials.Madera___Caoba_Horizontal} />
                <mesh geometry={nodes.Mesh006_8.geometry} material={materials.Madera___Caoba_Vertical} />
                <mesh geometry={nodes.Mesh006_9.geometry} material={materials['Madera___Pino_Granulado_Horizontal.002']} />
                <mesh geometry={nodes.Mesh006_10.geometry} material={materials['Tablas___03.001']} />
                <mesh geometry={nodes.Mesh006_11.geometry} material={materials['Pintura__Antracita.001']} />
                <mesh geometry={nodes.Mesh006_12.geometry} material={materials.Pintura__Melocot_n} />
                <mesh geometry={nodes.Mesh006_13.geometry} material={materials['Canter_a___12.001']} />
                <mesh geometry={nodes.Mesh006_14.geometry} material={materials.Metal___Hierro} />
                <mesh geometry={nodes.Mesh006_15.geometry} material={materials.Metal___Aluminio} />
                <mesh geometry={nodes.Mesh006_16.geometry} material={materials.Baldosas___Tostado_25x25} />
                <mesh geometry={nodes.Mesh006_17.geometry} material={materials['Metal___Acero_Inoxidable.001']} />
                <mesh geometry={nodes.Mesh006_18.geometry} material={materials.Madera___Roble_Claro} />
                <mesh geometry={nodes.Mesh006_19.geometry} material={materials['Hormig_n___04.001']} />
                <mesh geometry={nodes.Mesh006_20.geometry} material={materials['Vidrio___Claro_R_pido.001']} />
                <mesh geometry={nodes.Mesh006_21.geometry} material={materials.PEN_MATERIAL4} />
                <mesh geometry={nodes.Mesh006_22.geometry} material={materials.Estuco___Amarillo_Rugoso} />
                <mesh geometry={nodes.Mesh006_23.geometry} material={materials['Piedra___Granito_Rojo.001']} />
                <mesh geometry={nodes.Mesh006_24.geometry} material={materials['Estuco___Blanco_Fino.001']} />
                <mesh geometry={nodes.Mesh006_25.geometry} material={materials.Corteza__Caduco} />
                <mesh geometry={nodes.Mesh006_26.geometry} material={materials['Pintura__Oroen_Beige.001']} />
                <mesh geometry={nodes.Mesh006_27.geometry} material={materials['Estuco___Blanco_Rugoso.001']} />
                <mesh geometry={nodes.Mesh006_28.geometry} material={materials.Metal___Hierro1} />
                <mesh geometry={nodes.Mesh006_29.geometry} material={materials.PEN_MATERIAL2} />
            </group>
        </group>
    )
}

export default C2