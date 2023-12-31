import { createSlice } from "@reduxjs/toolkit";

export const rankingSlice = createSlice({
    name: "ranking",
    initialState: {
        cupboards: [],
        rayons: [],
        bards: [],
        cupboard: {},
        rayon: {},
        bard: {},
        cupboardModal: false,
        rayonModal: false,
        bardModal: false,
        importDocumentModal: false,
        showActions: false,
    },
    reducers: {
        setRanking: (state, action) => {
        state.ranking = action.payload;
        },
        setCupboardModal: (state, action) => {
        state.cupboardModal = action.payload;
        },
        setCupboardsList: (state, action) => {
        state.cupboards = action.payload;
        },
        updateCupboardsList: (state, action) => {
            state.cupboards = [...state.cupboards, action.payload]
        },
        setShowActions: (state, action) => {
            state.showActions = action.payload;
        },
        setRayonModal: (state, action) => {
            state.rayonModal = action.payload;
        },
        setBardModal: (state, action) => {
            state.bardModal = action.payload;
        },
        setImportDocumentModal: (state, action) => {
            state.importDocumentModal = action.payload;
        },
        setRayonsList: (state, action) => {
            state.rayons = action.payload;
        },
        updateRayonsList: (state, action) => {
            state.rayons = [...state.rayons, action.payload]
        },
        setBardsList: (state, action) => {
            state.bards = action.payload;
        },
        updateBardsList: (state, action) => {
            state.bards = [...state.bards, action.payload]
        },
        setCupboard: (state, action) => {
            state.cupboard = action.payload;
        },
        setRayon: (state, action) => {
            state.rayon = action.payload;
        },
        setBard: (state, action) => {
            state.bard = action.payload;
        },
    },
});

export default rankingSlice.reducer;

export const { setRanking, setCupboardModal, setCupboardsList, updateCupboardsList, setShowActions, setBardModal, setImportDocumentModal, setRayonModal, setRayonsList, updateRayonsList, setBardsList, updateBardsList, setCupboard, setRayon, setBard } = rankingSlice.actions;
