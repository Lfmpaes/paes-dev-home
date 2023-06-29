'use client';

import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { supabaseClient } from '../lib/supabase.middleware';

const strings = {
    name: 'Luiz Fernando M. Paes',
    description: 'Desenvolvedor | Gamer | Entusiasta Tech',
};

// function getProfilePic() {
//     const { data } = supabaseClient.storage
//         .from('Paes.dev Storage')
//         .getPublicUrl('profile.jpg');
//     return data.publicUrl;
// }

export default function ProfileCard() {
    // const profilePicUrl = getProfilePic();
    return (
        <div className="flex flex-col justify-center m-8 text-center">
            <Image
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://ljvmxaefwsmlyjdlfmpx.supabase.co/storage/v1/object/public/Paes.dev%20Storage/profile.jpg"
                width={128}
                height={128}
            />
            <p className="text-lfm-white text-xl font-semibold leading-tight">
                {strings.name}
            </p>
            <p className="text-lfm-white">{strings.description}</p>
        </div>
    );
}
