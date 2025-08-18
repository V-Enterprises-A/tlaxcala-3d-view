import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
       <group {...props} dispose={null}>
      <mesh geometry={nodes.logos_F.geometry} material={materials.lambert2} position={[0.146, 0.171, 3.148]} rotation={[Math.PI / 2, 0, 0]} scale={1.372} />
      <group position={[0.057, 0, -4.909]} rotation={[Math.PI / 2, 0, 0]} scale={0.426}>
        <mesh geometry={nodes.Mesh007.geometry} material={materials['Canter_a___13.001']} />
        <mesh geometry={nodes.Mesh007_1.geometry} material={materials['Vidrio___Claro_R_pido.002']} />
        <mesh geometry={nodes.Mesh007_2.geometry} material={materials.Madera___Nogal_Horizontal} />
        <mesh geometry={nodes.Mesh007_3.geometry} material={materials.Canter_a___02} />
        <mesh geometry={nodes.Mesh007_4.geometry} material={materials.Canter_a___12_19300658__desde_objeto_convertido_} />
        <mesh geometry={nodes.Mesh007_5.geometry} material={materials['Pintura__Gris_Claro.003']} />
        <mesh geometry={nodes.Mesh007_6.geometry} material={materials['Madera___Pino_Granulado_Horizontal.002']} />
        <mesh geometry={nodes.Mesh007_7.geometry} material={materials['Metal___Acero_Inoxidable.002']} />
        <mesh geometry={nodes.Mesh007_8.geometry} material={materials.Metal___Zinc} />
        <mesh geometry={nodes.Mesh007_9.geometry} material={materials.Canter_a___02_1} />
        <mesh geometry={nodes.Mesh007_10.geometry} material={materials.Estuco___Rojo_Rugoso} />
        <mesh geometry={nodes.Mesh007_11.geometry} material={materials['Color_D05.001']} />
        <mesh geometry={nodes.Mesh007_12.geometry} material={materials['Hormig_n___02.002']} />
        <mesh geometry={nodes.Mesh007_13.geometry} material={materials.Hormig_n___02_1} />
        <mesh geometry={nodes.Mesh007_14.geometry} material={materials.Cubierta___Tejas_Cedro_Claro} />
        <mesh geometry={nodes.Mesh007_15.geometry} material={materials['Pintura__Titanio_Blanco.001']} />
      </group>
    </group>
    )
}

export default C2