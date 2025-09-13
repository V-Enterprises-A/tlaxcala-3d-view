import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F1.geometry} material={materials['M_cintillaVF.001']} position={[-0.12, 0.41, 2.985]} rotation={[Math.PI / 2, 0, 0]} scale={2.219} />
            <group position={[-0.518, 0, -4.328]} rotation={[Math.PI / 2, 0, 0]} scale={0.573}>
                <mesh geometry={nodes.Mesh1488.geometry} material={materials['Pintura__Antracita.003']} />
                <mesh geometry={nodes.Mesh1488_1.geometry} material={materials['Pintura__Gris_Claro.006']} />
                <mesh geometry={nodes.Mesh1488_2.geometry} material={materials.Pavimento___Asfalto_Oscuro} />
                <mesh geometry={nodes.Mesh1488_3.geometry} material={materials['Madera___Pino_Granulado_Horizontal.005']} />
                <mesh geometry={nodes.Mesh1488_4.geometry} material={materials['Pavimento___Asfalto_Claro.004']} />
                <mesh geometry={nodes.Mesh1488_5.geometry} material={materials['Estuco___Blanco_Rugoso.003']} />
                <mesh geometry={nodes.Mesh1488_6.geometry} material={materials.Pintura__Antracita__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_7.geometry} material={materials['Vidrio___Claro_R_pido.005']} />
                <mesh geometry={nodes.Mesh1488_8.geometry} material={materials.Pintura__Burdeos__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_9.geometry} material={materials['Pintura__Blanco_Satinado.005']} />
                <mesh geometry={nodes.Mesh1488_10.geometry} material={materials.Pintura__Caledonio} />
                <mesh geometry={nodes.Mesh1488_11.geometry} material={materials['Madera___Roble_Claro.001']} />
                <mesh geometry={nodes.Mesh1488_12.geometry} material={materials['Canter_a___12_19300658__desde_objeto_convertido_.001']} />
                <mesh geometry={nodes.Mesh1488_13.geometry} material={materials.Metal_Panel_151_1__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_14.geometry} material={materials.Pavimento___Asfalto_Claro1} />
                <mesh geometry={nodes.Mesh1488_15.geometry} material={materials.Wood_Cork1_130_2__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_16.geometry} material={materials['Madera___Caoba_Horizontal.002']} />
                <mesh geometry={nodes.Mesh1488_17.geometry} material={materials._acero_135_5__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_18.geometry} material={materials.GDLM319_Color_M08__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_19.geometry} material={materials['Aire.002']} />
                <mesh geometry={nodes.Mesh1488_20.geometry} material={materials['Metal___Aluminio.002']} />
                <mesh geometry={nodes.Mesh1488_21.geometry} material={materials.GDLM281_0136_Charcoal__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_22.geometry} material={materials.Pintura__Cobalto_Azul} />
                <mesh geometry={nodes.Mesh1488_23.geometry} material={materials.Wood_Cherry_140__desde_objeto_convertido_} />
                <mesh geometry={nodes.Mesh1488_24.geometry} material={materials['Default__desde_objeto_convertido_.002']} />
            </group>
        </group>
    )
}

export default C2