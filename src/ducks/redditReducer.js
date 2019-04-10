import axios from 'axios'

const inState = {
    loading: false,
    articles: []
}

// action types

const REQ_ART = 'REQ_ART'

// action creators
export function reqArt() {
    let articles = axios.get('/api/reddit').then(res => {
        return res.data
    })
    return {
        type: REQ_ART,
        payload: articles
    }
}

export default function reducer(state = inState, action) {
    switch(action.type) {
        case REQ_ART + '_PENDING':
        return {...state, loading: true}
        case REQ_ART + '_FULFILLED':
        return {...state, articles: action.payload, loading: false}
        case REQ_ART + '_REJECTED':
        return {...state, loading: false}
        
        default:
        return state
    }
}