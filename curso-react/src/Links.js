import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";

import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
import Loja from "./components/03Props/Loja";
import Galaxia from "./components/04Children/Galaxia";
import ComPai from "./components/05ComPaiFilho/ComPai";
import Pokemon from './components/06Estados/Pokemon';
import { CompA } from './components/07PropDrilling/PropDrillingV2';
import { CompAA } from './components/08Context/CompContexto';
import SaveLoadData from './components/14LocalSessionStorage/SaveLoadData';
import PokemonPrincipal from './components/09PokemonContexto/PokemonPrincipal';
import Efeito from './components/10Efeito/Efeito';
import ComponentePromessa from './components/11Promessas/MinhaPromessa';
import CovidAxios from './components/12Axios/CovidAxios';
import PrincipalRedux from './components/13Redux/PrincipalRedux';

const LigamentoPages = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/galaxia' element={<Galaxia />} />
                    <Route path="/loja" element={<Loja />} />
                    <Route path="/funcoesinternas" element={<FuncoesInternas />} />
                    <Route path="/pai" element={<ComPai />} />
                    <Route path="/pokemon" element={<Pokemon />}/>
                    <Route path="/compA" element={<CompA />}/>
                    <Route path="/compContext" element={<CompAA />}/>
                    <Route path="/savedata" element={<SaveLoadData />}/>
                    <Route path="/pokecont" element={<PokemonPrincipal/>}/>
                    <Route path="/efeito" element={<Efeito/>}/>
                    <Route path='/promessa' element={<ComponentePromessa/>}/>
                    <Route path='/covidce' element={<CovidAxios/>}/>
                    <Route path='/principalredux' element={<PrincipalRedux />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default LigamentoPages