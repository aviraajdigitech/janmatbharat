import requests
import os

pms = {
    'nehru.jpg': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Jawaharlal_Nehru.jpg',
    'shastri.jpg': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Lal_Bahadur_Shastri_%28cropped%29.jpg',
    'indira.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Indira_Gandhi.jpg',
    'morarji.jpg': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Morarji_Desai.jpg',
    'charan.jpg': 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Chaudhary_Charan_Singh_%281%29.jpg',
    'rajiv.jpg': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Rajiv_Gandhi_in_1986.jpg',
    'vp_singh.jpg': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/V._P._Singh.jpg',
    'chandra_shekhar.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Chandra_Shekhar_in_1990.jpg',
    'rao.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/22/P._V._Narasimha_Rao.jpg',
    'deve_gowda.jpg': 'https://upload.wikimedia.org/wikipedia/commons/c/cd/H._D._Deve_Gowda_%28cropped%29.jpg',
    'gujral.jpg': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Inder_Kumar_Gujral.jpg',
    'vajpayee.jpg': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Atal_Bihari_Vajpayee.jpg',
    'manmohan.jpg': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Dr._Manmohan_Singh_%283%29.jpg',
    'modi.jpg': 'https://upload.wikimedia.org/wikipedia/commons/8/80/Prime_Minister_Narendra_Modi_Official_Portrait.jpg',
    'majestic_flag.jpg': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg'
}

dest_dir = os.path.join('public', 'assets', 'pms')

headers = {
    'User-Agent': 'JanmatBharatBot/1.0 (contact@janmatbharat.com)'
}

for name, url in pms.items():
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            with open(os.path.join(dest_dir, name), 'wb') as f:
                f.write(response.content)
            print(f"Downloaded {name}")
        else:
            print(f"Failed {name} - Status: {response.status_code}")
    except Exception as e:
        print(f"Error {name}: {e}")
