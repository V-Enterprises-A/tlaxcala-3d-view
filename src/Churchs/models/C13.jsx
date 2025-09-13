import React from 'react'

function C2({ nodes, materials, ...props }) {
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.logos_F1.geometry} material={materials['M_cintillaVF.001']} position={[-0.429, 0.523, 3.196]} rotation={[Math.PI / 2, 0, 0]} scale={2.794} />
            <group position={[-0.132, 2.014, -5.024]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.441}>
                <mesh geometry={nodes.Mesh1489.geometry} material={materials['Stone_Vein_Gray.001']} />
                <mesh geometry={nodes.Mesh1489_1.geometry} material={materials['Color_A05.002']} />
                <mesh geometry={nodes.Mesh1489_2.geometry} material={materials['Brick_Basket.001']} />
                <mesh geometry={nodes.Mesh1489_3.geometry} material={materials['Color_M00.003']} />
                <mesh geometry={nodes.Mesh1489_4.geometry} material={materials['_auto_8.002']} />
                <mesh geometry={nodes.Mesh1489_5.geometry} material={materials['Grass_Dark_Green.001']} />
                <mesh geometry={nodes.Mesh1489_6.geometry} material={materials['Color_A02.001']} />
                <mesh geometry={nodes.Mesh1489_7.geometry} material={materials['Brick_Tumbled.002']} />
                <mesh geometry={nodes.Mesh1489_8.geometry} material={materials['Translucent_Glass_Tinted.001']} />
                <mesh geometry={nodes.Mesh1489_9.geometry} material={materials['Mirror_01.001']} />
                <mesh geometry={nodes.Mesh1489_10.geometry} material={materials['Metal_Seamed.002']} />
                <mesh geometry={nodes.Mesh1489_11.geometry} material={materials['Translucent_Glass_Safety.002']} />
                <mesh geometry={nodes.Mesh1489_12.geometry} material={materials['Mirror_02.002']} />
                <mesh geometry={nodes.Mesh1489_13.geometry} material={materials['Metal_Steel_Textured.001']} />
                <mesh geometry={nodes.Mesh1489_14.geometry} material={materials['FrontColor.004']} />
                <mesh geometry={nodes.Mesh1489_15.geometry} material={materials['Blacktop_Old_01.002']} />
                <mesh geometry={nodes.Mesh1489_16.geometry} material={materials['_auto_4.002']} />
                <mesh geometry={nodes.Mesh1489_17.geometry} material={materials['Concrete_Block_Retaining_Gray.001']} />
            </group>
        </group>
    )
}

export default C2